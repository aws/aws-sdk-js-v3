import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetUtilizationInput, DescribeFleetUtilizationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetUtilizationCommandInput = DescribeFleetUtilizationInput;
export declare type DescribeFleetUtilizationCommandOutput = DescribeFleetUtilizationOutput & __MetadataBearer;
export declare class DescribeFleetUtilizationCommand extends $Command<DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetUtilizationCommandInput;
    constructor(input: DescribeFleetUtilizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
