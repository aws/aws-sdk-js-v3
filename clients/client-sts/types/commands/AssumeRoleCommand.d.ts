import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { AssumeRoleRequest, AssumeRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssumeRoleCommandInput = AssumeRoleRequest;
export declare type AssumeRoleCommandOutput = AssumeRoleResponse & __MetadataBearer;
export declare class AssumeRoleCommand extends $Command<AssumeRoleCommandInput, AssumeRoleCommandOutput, STSClientResolvedConfig> {
    readonly input: AssumeRoleCommandInput;
    constructor(input: AssumeRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssumeRoleCommandInput, AssumeRoleCommandOutput>;
    private serialize;
    private deserialize;
}
