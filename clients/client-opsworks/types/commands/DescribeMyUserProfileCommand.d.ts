import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeMyUserProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMyUserProfileCommandInput = {};
export declare type DescribeMyUserProfileCommandOutput = DescribeMyUserProfileResult & __MetadataBearer;
export declare class DescribeMyUserProfileCommand extends $Command<DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeMyUserProfileCommandInput;
    constructor(input: DescribeMyUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
