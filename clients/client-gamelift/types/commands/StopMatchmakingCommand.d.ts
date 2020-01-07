import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopMatchmakingInput, StopMatchmakingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopMatchmakingCommandInput = StopMatchmakingInput;
export declare type StopMatchmakingCommandOutput = StopMatchmakingOutput & __MetadataBearer;
export declare class StopMatchmakingCommand extends $Command<StopMatchmakingCommandInput, StopMatchmakingCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StopMatchmakingCommandInput;
    constructor(input: StopMatchmakingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopMatchmakingCommandInput, StopMatchmakingCommandOutput>;
    private serialize;
    private deserialize;
}
