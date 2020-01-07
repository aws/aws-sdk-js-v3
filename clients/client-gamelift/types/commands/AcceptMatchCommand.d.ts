import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { AcceptMatchInput, AcceptMatchOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptMatchCommandInput = AcceptMatchInput;
export declare type AcceptMatchCommandOutput = AcceptMatchOutput & __MetadataBearer;
export declare class AcceptMatchCommand extends $Command<AcceptMatchCommandInput, AcceptMatchCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: AcceptMatchCommandInput;
    constructor(input: AcceptMatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptMatchCommandInput, AcceptMatchCommandOutput>;
    private serialize;
    private deserialize;
}
