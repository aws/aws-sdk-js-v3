import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DeleteGraphRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGraphCommandInput = DeleteGraphRequest;
export declare type DeleteGraphCommandOutput = __MetadataBearer;
export declare class DeleteGraphCommand extends $Command<DeleteGraphCommandInput, DeleteGraphCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: DeleteGraphCommandInput;
    constructor(input: DeleteGraphCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGraphCommandInput, DeleteGraphCommandOutput>;
    private serialize;
    private deserialize;
}
