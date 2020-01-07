import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppRequest, GetAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAppCommandInput = GetAppRequest;
export declare type GetAppCommandOutput = GetAppResponse & __MetadataBearer;
export declare class GetAppCommand extends $Command<GetAppCommandInput, GetAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppCommandInput;
    constructor(input: GetAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppCommandInput, GetAppCommandOutput>;
    private serialize;
    private deserialize;
}
