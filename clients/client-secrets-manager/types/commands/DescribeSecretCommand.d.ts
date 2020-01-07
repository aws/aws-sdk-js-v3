import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DescribeSecretRequest, DescribeSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSecretCommandInput = DescribeSecretRequest;
export declare type DescribeSecretCommandOutput = DescribeSecretResponse & __MetadataBearer;
export declare class DescribeSecretCommand extends $Command<DescribeSecretCommandInput, DescribeSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: DescribeSecretCommandInput;
    constructor(input: DescribeSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecretCommandInput, DescribeSecretCommandOutput>;
    private serialize;
    private deserialize;
}
