import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteKeyPairRequest, DeleteKeyPairResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteKeyPairCommandInput = DeleteKeyPairRequest;
export declare type DeleteKeyPairCommandOutput = DeleteKeyPairResult & __MetadataBearer;
export declare class DeleteKeyPairCommand extends $Command<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteKeyPairCommandInput;
    constructor(input: DeleteKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
