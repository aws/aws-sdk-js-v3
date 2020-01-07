import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateHealthCheckRequest, CreateHealthCheckResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHealthCheckCommandInput = CreateHealthCheckRequest;
export declare type CreateHealthCheckCommandOutput = CreateHealthCheckResponse & __MetadataBearer;
export declare class CreateHealthCheckCommand extends $Command<CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateHealthCheckCommandInput;
    constructor(input: CreateHealthCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
