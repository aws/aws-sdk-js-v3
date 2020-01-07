import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DescribeContactRequest, DescribeContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContactCommandInput = DescribeContactRequest;
export declare type DescribeContactCommandOutput = DescribeContactResponse & __MetadataBearer;
export declare class DescribeContactCommand extends $Command<DescribeContactCommandInput, DescribeContactCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DescribeContactCommandInput;
    constructor(input: DescribeContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContactCommandInput, DescribeContactCommandOutput>;
    private serialize;
    private deserialize;
}
