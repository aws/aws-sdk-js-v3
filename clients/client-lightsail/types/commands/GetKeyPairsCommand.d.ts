import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetKeyPairsRequest, GetKeyPairsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetKeyPairsCommandInput = GetKeyPairsRequest;
export declare type GetKeyPairsCommandOutput = GetKeyPairsResult & __MetadataBearer;
export declare class GetKeyPairsCommand extends $Command<GetKeyPairsCommandInput, GetKeyPairsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetKeyPairsCommandInput;
    constructor(input: GetKeyPairsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPairsCommandInput, GetKeyPairsCommandOutput>;
    private serialize;
    private deserialize;
}
