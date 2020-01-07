import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartFleetActionsInput, StartFleetActionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartFleetActionsCommandInput = StartFleetActionsInput;
export declare type StartFleetActionsCommandOutput = StartFleetActionsOutput & __MetadataBearer;
export declare class StartFleetActionsCommand extends $Command<StartFleetActionsCommandInput, StartFleetActionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StartFleetActionsCommandInput;
    constructor(input: StartFleetActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFleetActionsCommandInput, StartFleetActionsCommandOutput>;
    private serialize;
    private deserialize;
}
