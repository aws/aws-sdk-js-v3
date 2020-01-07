import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchBackfillInput, StartMatchBackfillOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMatchBackfillCommandInput = StartMatchBackfillInput;
export declare type StartMatchBackfillCommandOutput = StartMatchBackfillOutput & __MetadataBearer;
export declare class StartMatchBackfillCommand extends $Command<StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartMatchBackfillCommandInput;
    constructor(input: StartMatchBackfillCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput>;
    private serialize;
    private deserialize;
}
