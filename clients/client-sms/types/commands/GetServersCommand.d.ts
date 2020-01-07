import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetServersRequest, GetServersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServersCommandInput = GetServersRequest;
export declare type GetServersCommandOutput = GetServersResponse & __MetadataBearer;
export declare class GetServersCommand extends $Command<GetServersCommandInput, GetServersCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetServersCommandInput;
    constructor(input: GetServersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServersCommandInput, GetServersCommandOutput>;
    private serialize;
    private deserialize;
}
