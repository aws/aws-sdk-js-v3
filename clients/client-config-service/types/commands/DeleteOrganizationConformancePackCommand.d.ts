import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteOrganizationConformancePackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOrganizationConformancePackCommandInput = DeleteOrganizationConformancePackRequest;
export declare type DeleteOrganizationConformancePackCommandOutput = __MetadataBearer;
export declare class DeleteOrganizationConformancePackCommand extends $Command<DeleteOrganizationConformancePackCommandInput, DeleteOrganizationConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteOrganizationConformancePackCommandInput;
    constructor(input: DeleteOrganizationConformancePackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationConformancePackCommandInput, DeleteOrganizationConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
