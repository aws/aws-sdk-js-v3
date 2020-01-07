import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetCapacityInput, DescribeFleetCapacityOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetCapacityCommandInput = DescribeFleetCapacityInput;
export declare type DescribeFleetCapacityCommandOutput = DescribeFleetCapacityOutput & __MetadataBearer;
export declare class DescribeFleetCapacityCommand extends $Command<DescribeFleetCapacityCommandInput, DescribeFleetCapacityCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetCapacityCommandInput;
    constructor(input: DescribeFleetCapacityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetCapacityCommandInput, DescribeFleetCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
