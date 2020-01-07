import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteTagOptionInput, DeleteTagOptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagOptionCommandInput = DeleteTagOptionInput;
export declare type DeleteTagOptionCommandOutput = DeleteTagOptionOutput & __MetadataBearer;
export declare class DeleteTagOptionCommand extends $Command<DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteTagOptionCommandInput;
    constructor(input: DeleteTagOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
