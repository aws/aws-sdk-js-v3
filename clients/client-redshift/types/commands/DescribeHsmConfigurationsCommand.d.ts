import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeHsmConfigurationsMessage, HsmConfigurationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHsmConfigurationsCommandInput = DescribeHsmConfigurationsMessage;
export declare type DescribeHsmConfigurationsCommandOutput = HsmConfigurationMessage & __MetadataBearer;
export declare class DescribeHsmConfigurationsCommand extends $Command<DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeHsmConfigurationsCommandInput;
    constructor(input: DescribeHsmConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
