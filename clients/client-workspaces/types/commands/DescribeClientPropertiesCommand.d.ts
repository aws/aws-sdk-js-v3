import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeClientPropertiesRequest, DescribeClientPropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientPropertiesCommandInput = DescribeClientPropertiesRequest;
export declare type DescribeClientPropertiesCommandOutput = DescribeClientPropertiesResult & __MetadataBearer;
export declare class DescribeClientPropertiesCommand extends $Command<DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeClientPropertiesCommandInput;
    constructor(input: DescribeClientPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
