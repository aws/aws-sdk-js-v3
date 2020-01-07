import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteMatchmakingRuleSetInput, DeleteMatchmakingRuleSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMatchmakingRuleSetCommandInput = DeleteMatchmakingRuleSetInput;
export declare type DeleteMatchmakingRuleSetCommandOutput = DeleteMatchmakingRuleSetOutput & __MetadataBearer;
export declare class DeleteMatchmakingRuleSetCommand extends $Command<DeleteMatchmakingRuleSetCommandInput, DeleteMatchmakingRuleSetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteMatchmakingRuleSetCommandInput;
    constructor(input: DeleteMatchmakingRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMatchmakingRuleSetCommandInput, DeleteMatchmakingRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
