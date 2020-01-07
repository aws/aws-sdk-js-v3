import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteFacesRequest, DeleteFacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFacesCommandInput = DeleteFacesRequest;
export declare type DeleteFacesCommandOutput = DeleteFacesResponse & __MetadataBearer;
export declare class DeleteFacesCommand extends $Command<DeleteFacesCommandInput, DeleteFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteFacesCommandInput;
    constructor(input: DeleteFacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFacesCommandInput, DeleteFacesCommandOutput>;
    private serialize;
    private deserialize;
}
