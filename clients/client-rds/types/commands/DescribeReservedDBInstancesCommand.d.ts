import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedDBInstancesCommandInput = DescribeReservedDBInstancesMessage;
export declare type DescribeReservedDBInstancesCommandOutput = ReservedDBInstanceMessage & __MetadataBearer;
export declare class DescribeReservedDBInstancesCommand extends $Command<DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeReservedDBInstancesCommandInput;
    constructor(input: DescribeReservedDBInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
