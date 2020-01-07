import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { AssumeRoleWithWebIdentityRequest, AssumeRoleWithWebIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssumeRoleWithWebIdentityCommandInput = AssumeRoleWithWebIdentityRequest;
export declare type AssumeRoleWithWebIdentityCommandOutput = AssumeRoleWithWebIdentityResponse & __MetadataBearer;
export declare class AssumeRoleWithWebIdentityCommand extends $Command<AssumeRoleWithWebIdentityCommandInput, AssumeRoleWithWebIdentityCommandOutput, STSClientResolvedConfig> {
    readonly input: AssumeRoleWithWebIdentityCommandInput;
    constructor(input: AssumeRoleWithWebIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssumeRoleWithWebIdentityCommandInput, AssumeRoleWithWebIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
