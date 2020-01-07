import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeletePredictorRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePredictorCommandInput = DeletePredictorRequest;
export declare type DeletePredictorCommandOutput = __MetadataBearer;
export declare class DeletePredictorCommand extends $Command<DeletePredictorCommandInput, DeletePredictorCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeletePredictorCommandInput;
    constructor(input: DeletePredictorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePredictorCommandInput, DeletePredictorCommandOutput>;
    private serialize;
    private deserialize;
}
