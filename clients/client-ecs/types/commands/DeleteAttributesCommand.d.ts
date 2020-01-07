import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteAttributesRequest, DeleteAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAttributesCommandInput = DeleteAttributesRequest;
export declare type DeleteAttributesCommandOutput = DeleteAttributesResponse & __MetadataBearer;
export declare class DeleteAttributesCommand extends $Command<DeleteAttributesCommandInput, DeleteAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteAttributesCommandInput;
    constructor(input: DeleteAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAttributesCommandInput, DeleteAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
