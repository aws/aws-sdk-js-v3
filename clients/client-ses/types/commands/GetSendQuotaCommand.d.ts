import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetSendQuotaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSendQuotaCommandInput = {};
export declare type GetSendQuotaCommandOutput = GetSendQuotaResponse & __MetadataBearer;
export declare class GetSendQuotaCommand extends $Command<GetSendQuotaCommandInput, GetSendQuotaCommandOutput, SESClientResolvedConfig> {
    readonly input: GetSendQuotaCommandInput;
    constructor(input: GetSendQuotaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSendQuotaCommandInput, GetSendQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
