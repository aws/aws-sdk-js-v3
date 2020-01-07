import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringConnectionsInput, DescribeVpcPeeringConnectionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcPeeringConnectionsCommandInput = DescribeVpcPeeringConnectionsInput;
export declare type DescribeVpcPeeringConnectionsCommandOutput = DescribeVpcPeeringConnectionsOutput & __MetadataBearer;
export declare class DescribeVpcPeeringConnectionsCommand extends $Command<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeVpcPeeringConnectionsCommandInput;
    constructor(input: DescribeVpcPeeringConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
