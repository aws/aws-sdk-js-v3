import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringAuthorizationsInput, DescribeVpcPeeringAuthorizationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcPeeringAuthorizationsCommandInput = DescribeVpcPeeringAuthorizationsInput;
export declare type DescribeVpcPeeringAuthorizationsCommandOutput = DescribeVpcPeeringAuthorizationsOutput & __MetadataBearer;
export declare class DescribeVpcPeeringAuthorizationsCommand extends $Command<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeVpcPeeringAuthorizationsCommandInput;
    constructor(input: DescribeVpcPeeringAuthorizationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
