import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrderableDBInstanceOptionsCommandInput = DescribeOrderableDBInstanceOptionsMessage;
export declare type DescribeOrderableDBInstanceOptionsCommandOutput = OrderableDBInstanceOptionsMessage & __MetadataBearer;
export declare class DescribeOrderableDBInstanceOptionsCommand extends $Command<DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeOrderableDBInstanceOptionsCommandInput;
    constructor(input: DescribeOrderableDBInstanceOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
