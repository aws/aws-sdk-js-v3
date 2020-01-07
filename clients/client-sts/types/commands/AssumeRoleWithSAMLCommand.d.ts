import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { AssumeRoleWithSAMLRequest, AssumeRoleWithSAMLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssumeRoleWithSAMLCommandInput = AssumeRoleWithSAMLRequest;
export declare type AssumeRoleWithSAMLCommandOutput = AssumeRoleWithSAMLResponse & __MetadataBearer;
export declare class AssumeRoleWithSAMLCommand extends $Command<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput, STSClientResolvedConfig> {
    readonly input: AssumeRoleWithSAMLCommandInput;
    constructor(input: AssumeRoleWithSAMLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput>;
    private serialize;
    private deserialize;
}
