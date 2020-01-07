import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetConnectorsRequest, GetConnectorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectorsCommandInput = GetConnectorsRequest;
export declare type GetConnectorsCommandOutput = GetConnectorsResponse & __MetadataBearer;
export declare class GetConnectorsCommand extends $Command<GetConnectorsCommandInput, GetConnectorsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetConnectorsCommandInput;
    constructor(input: GetConnectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectorsCommandInput, GetConnectorsCommandOutput>;
    private serialize;
    private deserialize;
}
