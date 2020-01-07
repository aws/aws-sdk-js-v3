import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopGameSessionPlacementInput, StopGameSessionPlacementOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopGameSessionPlacementCommandInput = StopGameSessionPlacementInput;
export declare type StopGameSessionPlacementCommandOutput = StopGameSessionPlacementOutput & __MetadataBearer;
export declare class StopGameSessionPlacementCommand extends $Command<StopGameSessionPlacementCommandInput, StopGameSessionPlacementCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StopGameSessionPlacementCommandInput;
    constructor(input: StopGameSessionPlacementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopGameSessionPlacementCommandInput, StopGameSessionPlacementCommandOutput>;
    private serialize;
    private deserialize;
}
