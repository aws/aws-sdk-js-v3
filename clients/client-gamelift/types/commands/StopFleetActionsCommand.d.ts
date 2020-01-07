import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopFleetActionsInput, StopFleetActionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopFleetActionsCommandInput = StopFleetActionsInput;
export declare type StopFleetActionsCommandOutput = StopFleetActionsOutput & __MetadataBearer;
export declare class StopFleetActionsCommand extends $Command<StopFleetActionsCommandInput, StopFleetActionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: StopFleetActionsCommandInput;
    constructor(input: StopFleetActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopFleetActionsCommandInput, StopFleetActionsCommandOutput>;
    private serialize;
    private deserialize;
}
