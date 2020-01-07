import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeEngineDefaultClusterParametersMessage, DescribeEngineDefaultClusterParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEngineDefaultClusterParametersCommandInput = DescribeEngineDefaultClusterParametersMessage;
export declare type DescribeEngineDefaultClusterParametersCommandOutput = DescribeEngineDefaultClusterParametersResult & __MetadataBearer;
export declare class DescribeEngineDefaultClusterParametersCommand extends $Command<DescribeEngineDefaultClusterParametersCommandInput, DescribeEngineDefaultClusterParametersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeEngineDefaultClusterParametersCommandInput;
    constructor(input: DescribeEngineDefaultClusterParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEngineDefaultClusterParametersCommandInput, DescribeEngineDefaultClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
