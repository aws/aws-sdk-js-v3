import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetSendStatisticsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSendStatisticsCommandInput = {};
export declare type GetSendStatisticsCommandOutput = GetSendStatisticsResponse & __MetadataBearer;
export declare class GetSendStatisticsCommand extends $Command<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput, SESClientResolvedConfig> {
    readonly input: GetSendStatisticsCommandInput;
    constructor(input: GetSendStatisticsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
