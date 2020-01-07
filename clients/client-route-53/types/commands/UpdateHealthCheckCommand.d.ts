import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHealthCheckRequest, UpdateHealthCheckResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateHealthCheckCommandInput = UpdateHealthCheckRequest;
export declare type UpdateHealthCheckCommandOutput = UpdateHealthCheckResponse & __MetadataBearer;
export declare class UpdateHealthCheckCommand extends $Command<UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateHealthCheckCommandInput;
    constructor(input: UpdateHealthCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
