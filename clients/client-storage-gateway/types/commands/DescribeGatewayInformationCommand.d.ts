import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeGatewayInformationInput, DescribeGatewayInformationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGatewayInformationCommandInput = DescribeGatewayInformationInput;
export declare type DescribeGatewayInformationCommandOutput = DescribeGatewayInformationOutput & __MetadataBearer;
export declare class DescribeGatewayInformationCommand extends $Command<DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeGatewayInformationCommandInput;
    constructor(input: DescribeGatewayInformationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput>;
    private serialize;
    private deserialize;
}
