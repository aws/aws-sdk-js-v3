import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetCallerIdentityRequest, GetCallerIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCallerIdentityCommandInput = GetCallerIdentityRequest;
export declare type GetCallerIdentityCommandOutput = GetCallerIdentityResponse & __MetadataBearer;
export declare class GetCallerIdentityCommand extends $Command<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput, STSClientResolvedConfig> {
    readonly input: GetCallerIdentityCommandInput;
    constructor(input: GetCallerIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
