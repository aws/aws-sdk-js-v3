import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartGameSessionPlacementInput, StartGameSessionPlacementOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartGameSessionPlacementCommandInput = StartGameSessionPlacementInput;
export declare type StartGameSessionPlacementCommandOutput = StartGameSessionPlacementOutput & __MetadataBearer;
export declare class StartGameSessionPlacementCommand extends $Command<StartGameSessionPlacementCommandInput, StartGameSessionPlacementCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartGameSessionPlacementCommandInput;
    constructor(input: StartGameSessionPlacementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartGameSessionPlacementCommandInput, StartGameSessionPlacementCommandOutput>;
    private serialize;
    private deserialize;
}
