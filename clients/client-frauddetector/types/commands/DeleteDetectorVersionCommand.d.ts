import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteDetectorVersionRequest, DeleteDetectorVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDetectorVersionCommandInput = DeleteDetectorVersionRequest;
export declare type DeleteDetectorVersionCommandOutput = DeleteDetectorVersionResult & __MetadataBearer;
export declare class DeleteDetectorVersionCommand extends $Command<DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteDetectorVersionCommandInput;
    constructor(input: DeleteDetectorVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
