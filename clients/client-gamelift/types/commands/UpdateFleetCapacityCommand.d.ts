import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFleetCapacityCommandInput = UpdateFleetCapacityInput;
export declare type UpdateFleetCapacityCommandOutput = UpdateFleetCapacityOutput & __MetadataBearer;
export declare class UpdateFleetCapacityCommand extends $Command<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetCapacityCommandInput;
    constructor(input: UpdateFleetCapacityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
