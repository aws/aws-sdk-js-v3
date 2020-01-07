import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AccountAttributeList, DescribeAccountAttributesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountAttributesCommandInput = DescribeAccountAttributesMessage;
export declare type DescribeAccountAttributesCommandOutput = AccountAttributeList & __MetadataBearer;
export declare class DescribeAccountAttributesCommand extends $Command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeAccountAttributesCommandInput;
    constructor(input: DescribeAccountAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
