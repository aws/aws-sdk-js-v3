import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventCategoriesCommandInput = DescribeEventCategoriesMessage;
export declare type DescribeEventCategoriesCommandOutput = EventCategoriesMessage & __MetadataBearer;
export declare class DescribeEventCategoriesCommand extends $Command<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeEventCategoriesCommandInput;
    constructor(input: DescribeEventCategoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
