import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetActiveNamesRequest, GetActiveNamesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetActiveNamesCommandInput = GetActiveNamesRequest;
export declare type GetActiveNamesCommandOutput = GetActiveNamesResult & __MetadataBearer;
export declare class GetActiveNamesCommand extends $Command<GetActiveNamesCommandInput, GetActiveNamesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetActiveNamesCommandInput;
    constructor(input: GetActiveNamesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetActiveNamesCommandInput, GetActiveNamesCommandOutput>;
    private serialize;
    private deserialize;
}
