import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetAccountSendingEnabledResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccountSendingEnabledCommandInput = {};
export declare type GetAccountSendingEnabledCommandOutput = GetAccountSendingEnabledResponse & __MetadataBearer;
export declare class GetAccountSendingEnabledCommand extends $Command<GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: GetAccountSendingEnabledCommandInput;
    constructor(input: GetAccountSendingEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
