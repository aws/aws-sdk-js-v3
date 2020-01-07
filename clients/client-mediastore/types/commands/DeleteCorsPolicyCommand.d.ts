import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteCorsPolicyInput, DeleteCorsPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCorsPolicyCommandInput = DeleteCorsPolicyInput;
export declare type DeleteCorsPolicyCommandOutput = DeleteCorsPolicyOutput & __MetadataBearer;
export declare class DeleteCorsPolicyCommand extends $Command<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteCorsPolicyCommandInput;
    constructor(input: DeleteCorsPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
