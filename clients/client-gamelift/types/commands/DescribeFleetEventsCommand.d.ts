import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetEventsInput, DescribeFleetEventsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetEventsCommandInput = DescribeFleetEventsInput;
export declare type DescribeFleetEventsCommandOutput = DescribeFleetEventsOutput & __MetadataBearer;
export declare class DescribeFleetEventsCommand extends $Command<DescribeFleetEventsCommandInput, DescribeFleetEventsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetEventsCommandInput;
    constructor(input: DescribeFleetEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetEventsCommandInput, DescribeFleetEventsCommandOutput>;
    private serialize;
    private deserialize;
}
