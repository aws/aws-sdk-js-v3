import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DeleteTagsRequest, DeleteTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagsCommandInput = DeleteTagsRequest;
export declare type DeleteTagsCommandOutput = DeleteTagsResponse & __MetadataBearer;
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
