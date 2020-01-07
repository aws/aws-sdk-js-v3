import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DeleteApplicationsRequest, DeleteApplicationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationsCommandInput = DeleteApplicationsRequest;
export declare type DeleteApplicationsCommandOutput = DeleteApplicationsResponse & __MetadataBearer;
export declare class DeleteApplicationsCommand extends $Command<DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DeleteApplicationsCommandInput;
    constructor(input: DeleteApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
