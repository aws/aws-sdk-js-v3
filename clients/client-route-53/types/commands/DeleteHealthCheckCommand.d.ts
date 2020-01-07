import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHealthCheckCommandInput = DeleteHealthCheckRequest;
export declare type DeleteHealthCheckCommandOutput = DeleteHealthCheckResponse & __MetadataBearer;
export declare class DeleteHealthCheckCommand extends $Command<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteHealthCheckCommandInput;
    constructor(input: DeleteHealthCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
