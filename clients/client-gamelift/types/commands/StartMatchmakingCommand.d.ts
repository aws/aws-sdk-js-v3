import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchmakingInput, StartMatchmakingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMatchmakingCommandInput = StartMatchmakingInput;
export declare type StartMatchmakingCommandOutput = StartMatchmakingOutput & __MetadataBearer;
export declare class StartMatchmakingCommand extends $Command<StartMatchmakingCommandInput, StartMatchmakingCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartMatchmakingCommandInput;
    constructor(input: StartMatchmakingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMatchmakingCommandInput, StartMatchmakingCommandOutput>;
    private serialize;
    private deserialize;
}
