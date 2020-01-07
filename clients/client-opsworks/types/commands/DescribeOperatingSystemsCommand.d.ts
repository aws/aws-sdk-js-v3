import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeOperatingSystemsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOperatingSystemsCommandInput = {};
export declare type DescribeOperatingSystemsCommandOutput = DescribeOperatingSystemsResponse & __MetadataBearer;
export declare class DescribeOperatingSystemsCommand extends $Command<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeOperatingSystemsCommandInput;
    constructor(input: DescribeOperatingSystemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput>;
    private serialize;
    private deserialize;
}
